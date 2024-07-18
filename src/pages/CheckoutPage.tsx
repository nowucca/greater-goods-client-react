import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isCreditCard, isMobilePhone } from "../validators";
import { sleep } from "../utils";
import { object, string, ValidationError } from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { TextInput } from "../components/form/TextInput";
import { useCart } from "../context/CartContext";
import { asDollarsAndCents } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./CheckoutPage.css";

interface FormValues {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
}

const initialValues: FormValues = {
  name: "Steve",
  address: "123 Main St",
  phone: "4085551212",
  email: "steve@main.com",
  ccNumber: "4444333322221111",
};

const validationSchema = object({
  name: string()
    .required("Please provide a name.")
    .min(4, "Name must have at least 4 letters.")
    .max(45, "Name can have at most 45 letters."),
  address: string()
    .required("Please provide an address.")
    .min(4, "Your address must have at least 4 letters.")
    .max(45, "Your address can have at most 45 letters."),
  phone: string()
    .required("Please provide a phone number.")
    .test("isMobilePhone", "Please provide a valid phone number.", (value) =>
      isMobilePhone(value || "")
    ),
  email: string()
    .required("Please provide an email address.")
    .email("Please provide a valid email address."),
  ccNumber: string()
    .required("Please provide a credit card number.")
    .test(
      "isCreditCard",
      "Please provide a valid credit card number.",
      (value) => isCreditCard(value || "")
    ),
});

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [checkoutStatus, setCheckoutStatus] = useState<string>("");

  const resetOrder = (resetForm: () => void) => {
    console.log("Reset order");
    resetForm();
    setCheckoutStatus("");
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("Submit order");
    await sleep(1000);
    const result = await validationSchema
      .validate(values, { abortEarly: false })
      .catch((err) => err);
    if (result instanceof ValidationError) {
      setCheckoutStatus("ERROR");
      actions.setSubmitting(false);
    } else {
      setCheckoutStatus("PENDING");
      await sleep(1000);
      setCheckoutStatus("OK");
      await sleep(1000);
      navigate("/confirmation");
    }
  };

  return (
    <div id="checkout" className="checkout-page hero-area">
      {cart.empty && (
        <section id="checkout-empty">
          <p>
            Your cart is empty. Please add an item to your cart to checkout.
          </p>
        </section>
      )}

      {!cart.empty && (
        <section id="checkout-main" className="checkout-page-body">
          <p style={{ fontWeight: "bold" }}>Checkout</p>
          <div id="checkout-form-and-info">
            <div id="checkout-form-box">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={true}
              >
                {({ isSubmitting, resetForm }) => (
                  <Form id="checkout-form">
                    <TextInput label="Name" name="name" />
                    <TextInput label="Address" name="address" />
                    <TextInput label="Phone" name="phone" />
                    <TextInput label="Email" name="email" type="email" />
                    <TextInput label="Credit Card" name="ccNumber" />
                    <div id="checkout-button-area">
                      <button
                        id="checkout-button"
                        type="submit"
                        className="emphasized-2x-button"
                        disabled={isSubmitting || checkoutStatus === "PENDING"}
                      >
                        {isSubmitting ? (
                          <FontAwesomeIcon icon={faSpinner} spin />
                        ) : (
                          "Complete Purchase"
                        )}
                      </button>
                      <button
                        id="reset-button"
                        className="normal-2x-button"
                        onClick={() => resetOrder(resetForm)}
                        type="reset"
                      >
                        Reset Form
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div id="checkout-info">
              <span id="checkout-info-text">
                Your credit card will be charged{" "}
                <strong>
                  {asDollarsAndCents(cart.subtotal + cart.surcharge)}
                </strong>
                <br />(<strong>{asDollarsAndCents(cart.subtotal)}</strong> +{" "}
                <strong>{asDollarsAndCents(cart.surcharge)}</strong> shipping)
              </span>
            </div>
          </div>

          {checkoutStatus !== "" && (
            <div v-if="form.checkoutStatus !== ''" className="form-text-holder">
              {checkoutStatus === "ERROR" && (
                <div className="form-text form-error-text">
                  Error: Please fix the problems above and try again.
                </div>
              )}
              {checkoutStatus === "PENDING" && (
                <div className="form-text form-pending-text">Processing...</div>
              )}
              {checkoutStatus === "OK" && (
                <div className="form-text form-ok-text">Order placed...</div>
              )}
              {checkoutStatus === "SERVER_ERROR" && (
                <div className="form-text form-error-text">
                  An unexpected error occurred, please try again.
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CheckoutPage;

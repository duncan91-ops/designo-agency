"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./contact-form.module.scss";

interface IContact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.name}>
        <input
          className={styles.name__input}
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && (
          <p className={styles.error}>
            <span>Can&apos;t be empty</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FFF" />
                <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
              </g>
            </svg>
          </p>
        )}
      </div>
      <div className={styles.email}>
        <input
          className={styles.email}
          type="email__input"
          placeholder="Email Address"
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.error}>
            {errors.email.type === "required" ? (
              <span>Can&apos;t be empty</span>
            ) : (
              errors.email.type === "email" && (
                <span>Invalid email address</span>
              )
            )}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FFF" />
                <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
              </g>
            </svg>
          </p>
        )}
      </div>
      <div className={styles.phone}>
        <input
          className={styles.phone__input}
          type="text"
          placeholder="Phone"
          {...register("phone")}
        />
        {errors.phone && (
          <p className={styles.error}>
            <span>Can&apos;t be empty</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FFF" />
                <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
              </g>
            </svg>
          </p>
        )}
      </div>
      <div className={styles.msg}>
        <textarea
          className={styles.msg__input}
          placeholder="Your Message"
          rows={3}
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className={styles.error}>
            <span>Can&apos;t be empty</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FFF" />
                <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
              </g>
            </svg>
          </p>
        )}
      </div>
      <button type="submit" className={`${styles.submit} btn__primary`}>
        submit
      </button>
    </form>
  );
}

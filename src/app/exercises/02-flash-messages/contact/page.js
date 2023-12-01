"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ContactPage() {
  const nextRouter = useRouter()

  return (
    <main>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          nextRouter.push('/exercises/02-flash-messages')
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} value={'name'}/>

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={'message'}/>

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;

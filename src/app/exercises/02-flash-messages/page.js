'use client'
import React from 'react';
import Link from 'next/link';
import Toast from '../../../components/Toast';
import { ToastContext } from '../../../components/ToastProvider';

function FlashMsgExercise() {
  const {createToast} = React.useContext(ToastContext)
  React.useEffect(() => createToast("Message Sent", "success"), [])
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>
        Got feedback? Please{' '}
        <Link href="/exercises/02-flash-messages/contact">
          contact us
        </Link>
        .
      </p>
    </main>
  );
}

export default FlashMsgExercise;

"use client";

import { useRef, useState } from "react";
import { submitWaitlist, type WaitlistPayload } from "@/src/lib/waitlist";

export type SubmitState = "idle" | "loading" | "success" | "error";

/** Shared async-submission state for every waitlist form (loading, success, error, duplicate-submit guard). */
export function useWaitlistSubmit() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inFlight = useRef(false);

  const submit = async (payload: WaitlistPayload) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setState("loading");
    setErrorMessage("");
    const result = await submitWaitlist(payload);
    inFlight.current = false;
    if (result.ok) {
      setState("success");
    } else {
      setState("error");
      setErrorMessage(result.message);
    }
    return result;
  };

  const reset = () => {
    setState("idle");
    setErrorMessage("");
  };

  return { state, errorMessage, submit, reset, isSubmitting: state === "loading" };
}

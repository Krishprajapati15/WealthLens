"use client";
import { useEffect } from "react";
import Vapi from "@vapi-ai/web";

export default function VapiPage() {
  useEffect(() => {
    const vapi = new Vapi("eaca5422-eca6-4653-92fc-8ec899e6cebf");

    const assistantId = "d449af11-736a-41c6-8950-4fb38b96e801";

    const startCallButton = document.getElementById("start-call");
    startCallButton?.addEventListener("click", async () => {
      await vapi.start(assistantId);
    });

    const stopCallButton = document.getElementById("stop-call");
    stopCallButton?.addEventListener("click", async () => {
      await vapi.stop();
    });

    vapi.on("call-start", () => {
      console.log("Call Started");
    });

    vapi.on("call-end", () => {
      console.log("Call Ended");
    });

    vapi.on("speech-start", () => {
      console.log("Assistant is speaking...");
    });

    vapi.on("speech-end", () => {
      console.log("Assistant finished speaking.");
    });

    vapi.on("message", (msg) => {
      if (msg.type !== "transcript") return;

      if (msg.transcriptType === "partial") {
        console.log("Partial transcript:", msg.text);
      }

      if (msg.transcriptType === "final") {
        console.log("Final transcript:", msg.text);
      }
    });

    vapi.on("message", (msg) => {
      if (msg.type !== "function-call") return;

      if (msg.functionCall.name === "addTopping") {
        const topping = msg.functionCall.parameters.topping;
        console.log("Add topping:", topping);
      }

      if (msg.functionCall.name === "goToCheckout") {
        console.log("Redirecting to checkout...");
      }
    });
  }, []);

  return (
    <div className="flex gap-4">
      <button
        id="start-call"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Start Call
      </button>
      <button
        id="stop-call"
        className="bg-red-600 text-white px-4 py-2 rounded shadow"
      >
        Stop Call
      </button>
    </div>
  );
}

// app/providers.tsx
"use client";

import Image from "next/image";
import CodeBlock from "../codeBlock";
const Icon = `const dispatch = useDispatch();
const countdown = useSelector((state: RootState) => state.countdown);
const newTargetDate = new Date("2023-12-16T00:00:00").toString();`;
export function Feature() {
  return (
    <div>
      <div className="font-bold text-3xl mt-3">1.Countdown</div>
      <div className="font-medium text-lg mt-3">A. Countdown</div>
      <div className="font-normal text-base mt-3">
        You only need to do this if you want to use the countdown time
      </div>
      <div>
        <CodeBlock code={Icon} language="react" />
      </div>
      <div className="font-bold text-3xl mt-3">2.Form</div>
      <div className="font-medium text-lg mt-3">A. Payment</div>
      <div className="font-normal text-base mt-3">
        This form is used to store payments in the user
      </div>
      <div className="my-5">
        <Image width={550} height={550} src="/form-payment.png" alt="asd" />
      </div>
      <div className="font-medium text-lg mt-3">B. User</div>
      <div className="font-normal text-base mt-3">
        This form is used to store in the user
      </div>
      <div className="my-5">
        <Image width={550} height={550} src="/form-user.png" alt="asd" />
      </div>
      <div className="font-bold text-3xl mt-3">3.Pop Up</div>
    </div>
  );
}

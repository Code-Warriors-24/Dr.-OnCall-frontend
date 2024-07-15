"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const btnRef = useRef();

  useEffect(() => {
    console.log("cccc", count);
  }, []);

  console.log("toolkit");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-orange-500 font-bold text-2xl">{count.value}</h1>
      <button
        className="px-5 border border-amber-600"
        onClick={() => dispatch(increment())}
      >
        Add{" "}
      </button>

      <button
        className="px-5 my-2 border border-amber-600"
        onClick={() => dispatch(decrement())}
      >
        Minus{" "}
      </button>
    </main>
  );
}

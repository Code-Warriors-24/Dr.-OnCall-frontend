"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  console.log("toolkit", count);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Add </button>
      <button onClick={() => dispatch(decrement())}>Minus </button>
    </main>
  );
}

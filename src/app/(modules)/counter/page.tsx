import { Metadata } from "next";
import CounterClient from "./counter";

export const metadata: Metadata = {
    title: "Counter",
    description: "Counter",
  };

export default function Counter() {
    return <CounterClient></CounterClient>
}
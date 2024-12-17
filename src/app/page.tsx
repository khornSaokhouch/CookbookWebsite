import Link from "next/link";
import Header from "@/components/Header";
import NewpostGrid from "@/components/cards/Newpost";
import WeekGrid from "@/components/cards/Week"


export default function Home() {
  return (
    <div>
      <Header />
      <NewpostGrid />
      <WeekGrid />
    </div>
  );
}

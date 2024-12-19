import Grid from "@/components/ui/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/ui/RecentProjects";
import Clientes from "@/components/ui/Clientes";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name : "Início", link: "/", icon: <FaHome />}

]} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clientes />
      </div>
    </main>
  );
}

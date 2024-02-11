import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Badge } from "./components/ui/badge";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";

export function App() {

  return (
    <div className="bg-background overflow-x-hidden">
      <Header />

      <div id="home" className="flex flex-col items-center p-10">
        <Badge variant="default">Sobre mim</Badge>

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold">Olá, eu sou Gadiego Nogueira</h1>
          <p className="text-base font-medium text-slate-600">Apaixonado por criar experiências incríveis na web.</p>
        </div>
      </div>

      <div className="h-px w-screen bg-slate-700" />

      <About />

      <div className="h-px w-screen bg-slate-700" />

      <Projects />

      <div className="h-px w-screen bg-slate-700" />

      <Contact />

      <div className="h-px w-screen bg-slate-700" />

      <Footer />
    </div>
  )
}

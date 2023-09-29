import { useCursorTracker } from "@/hooks/useCursorTracker";

const Engagement: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

const Engagements: React.FC = () => {
  return (
    <main className="w-screen pb-[10vw] px-[5.4vw] xl:px-[8rem]">
        <section className="mb-[6em]">
            <figure className="h-[0.1em] w-full bg-black" />
            <div className="row flex justify-between items-center font-medium w-full">
                <div className="col">
                    00
                </div>
                <div className="col flex justify-between items-center w-[60%]">
                    <span>/05</span>
                    <span className="text-[2em]">●</span>
                </div>
            </div>
        </section>

        <section>
            <h1 className="uppercase text-[3.5em] leading-[0.95] font-semibold mt-[2rem]">Featured <br />Engagements</h1>
        </section>
        
    </main>
  )
}

export default Engagements
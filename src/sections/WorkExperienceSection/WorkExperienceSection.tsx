import WorkExpCard from "@/src/components/WorkExpCard/WorkExpCard";
import WorkExpTimeline from "@/src/components/WorkExpTimeline/WorkExpTimeline";
import {MILESTONES} from "@/src/store/constantStore";
import {useState, useEffect, useRef} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);
  const [animateTimeLine, setAnimateTimeLine] = useState<boolean>(false);
  const [animateWorkExpCard, setAnimateWorkExpCard] = useState<boolean>(false);

  const workeExpCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && !animateTimeLine) {
          if (animateTimeLine) {
            setAnimateTimeLine(false);
          }
          setAnimateTimeLine(true);
        } else if (!entry.isIntersecting && entry.intersectionRatio === 0 && animateTimeLine) {
          if (workeExpCardAnimateDelayTimer.current) {
            clearTimeout(workeExpCardAnimateDelayTimer.current);
            workeExpCardAnimateDelayTimer.current = null;
          }
          setAnimateTimeLine(false);
          setAnimateWorkExpCard(false);
          setSelectedMilestoneId(1);
        }
      },
      {
        threshold: [0, 0.9],
      }
    );

    const currentElement = sectionRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animateTimeLine]);

  useEffect(() => {
    if (animateTimeLine) {
      workeExpCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimateWorkExpCard(true);
      }, 1400);
    } else {
      if (workeExpCardAnimateDelayTimer.current) {
        clearTimeout(workeExpCardAnimateDelayTimer.current);
        workeExpCardAnimateDelayTimer.current = null;
      }
    }

    return () => {
      if (workeExpCardAnimateDelayTimer.current) {
        clearTimeout(workeExpCardAnimateDelayTimer.current);
        workeExpCardAnimateDelayTimer.current = null;
      }
    };
  }, [animateTimeLine]);

  const selectedMileStone = MILESTONES.find((milestone) => milestone.id === selectedMilestoneId) || MILESTONES[0];

  return (
    <section
      ref={sectionRef}
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
      bg-white flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto
      "
    >
      <WorkExpTimeline
        selectedMilestoneId={selectedMilestoneId}
        setSelectedMilestoneId={setSelectedMilestoneId}
        animateTimeLine={animateTimeLine}
      />

      <WorkExpCard selectedMileStone={selectedMileStone} animateWorkExpCard={animateWorkExpCard} />
    </section>
  );
}

export default WorkExperienceSection;

import Image from "next/image";
import ProjectPuffin1 from "@/images/projects/project-puffin-1.webp";
import ProjectPuffin2 from "@/images/projects/project-puffin-2.webp";
import ProjectPuffin3 from "@/images/projects/project-puffin-3.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

const ProjectPuffin = () => {
  return (
    <div className="mx-[8%] my-[5%] font-jost text-white">
      <div className="mb-[3%]">
        <ShiftedLineTitle
          title="Project Puffin"
          width="md:w-[90%]"
          textSize="sm:text-5xl"
          lineMarginShift="ml-[30%]"
        />
      </div>

      <div className="text-md text-justify sm:hidden">
        <Image
          src={ProjectPuffin1}
          alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
          className="mb-2"
        />
        <p className="mx-[2%] mb-4">
          A common challenge in many engineering organizations is the lack of
          effective mentorship. Novice members often find themselves assigned to
          complex projects requiring advanced knowledge, which can be
          overwhelming. To address this issue, the Puffin division offers a
          program designed for newer members to "get their feet wet" and grasp
          the fundamentals of aeronautical engineering and drone design.
        </p>
        <Image
          src={ProjectPuffin2}
          alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
          className="mb-2"
        />
        <p className="mx-[2%] mb-4">
          This program includes a quarter-long ENGR course, taught by Juniors
          and Seniors from our club, where participants will receive guidance in
          building a personal drone. Throughout the course, members will learn
          basic circuit design, CAD, and fundamental physics to complete their
          drone by the end of the quarter.
        </p>
        <Image
          src={ProjectPuffin3}
          alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
          className="mb-2"
        />
        <p className="mx-[2%]">
          Successfully finishing the Puffin project will equip members with
          drone theory knowledge and teamwork experience. Freshmen and
          Sophomores at UCR can join the Aviat'R team only after completing one
          quarter of the Puffin project and building a functional quadcopter.
          Alternatively, students who believe their skills exceed the program’s
          requirements may join through sub-team intro projects and in-person
          evaluations.
        </p>
      </div>
      <div className="hidden sm:block">
        <p className="text-md mx-[2%] mb-[5%] text-justify font-jost md:text-xl md:leading-relaxed">
          A common challenge in many engineering organizations is the lack of
          effective mentorship. Novice members often find themselves assigned to
          complex projects requiring advanced knowledge, which can be
          overwhelming. To address this issue, the Puffin division offers a
          program designed for newer members to "get their feet wet" and grasp
          the fundamentals of aeronautical engineering and drone design. This
          program includes a quarter-long ENGR course, taught by Juniors and
          Seniors from our club, where participants will receive guidance in
          building a personal drone. Throughout the course, members will learn
          basic circuit design, CAD, and fundamental physics to complete their
          drone by the end of the quarter. Successfully finishing the Puffin
          project will equip members with drone theory knowledge and teamwork
          experience. Freshmen and Sophomores at UCR can join the Aviat'R team
          only after completing one quarter of the Puffin project and building a
          functional quadcopter. Alternatively, students who believe their
          skills exceed the program’s requirements may join through sub-team
          intro projects and in-person evaluations.
        </p>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4">
          <Image
            src={ProjectPuffin1}
            alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
          />
          <div>
            <Image
              src={ProjectPuffin2}
              alt="Simulation of airflow over an aircraft model showing colored velocity streamlines in a CAD software interface"
              className="h-full"
            />
          </div>
          <Image
            src={ProjectPuffin3}
            alt="Aviatr members in a classroom setting with laptops, listening attentively to a presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPuffin;

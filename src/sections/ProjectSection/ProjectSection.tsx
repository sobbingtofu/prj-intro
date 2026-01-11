function ProjectSection() {
  return (
    <section
      id="ProjectSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      bg-background flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto"
    >
      <div
        className="md:w-[80%] w-[90%] flex
        sm:flex-row sm:justify-between sm:h-auto
        flex-col-reverse h-auto justify-end
        border-black border
        sm:gap-0 gap-4
        "
      >
        <h1>프로젝트</h1>
      </div>
    </section>
  );
}

export default ProjectSection;

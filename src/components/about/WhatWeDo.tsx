import React from "react";

const BoardMember = () => {
  return (
    <div className="mx-auto flex h-1/4 w-1/2 flex-col">
      <div className="mb-10 flex w-full flex-col items-center gap-3">
        <div className="font-heading mb-2 font-metrophobic text-5xl text-aviatr-blue-500">
          What We Do
        </div>
        <div className="h-0.5 w-1/3 bg-aviatr-blue-500" />
      </div>
      <div className="text-center font-jost text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan
        urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit.
        Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur
        convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras
        aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida
        convallis. Sed nec risus vel purus varius eleifend. Nunc id molestie
        nisl. Sed ac ante quis nisl tincidunt feugiat. Maecenas pharetra libero
        ut nunc vulputate, in mattis velit ultricies. Maecenas tincidunt magna a
        nisl bibendum, nec auctor nunc iaculis. Vivamus sed eleifend purus. Ut
        sodales erat non diam accumsan, sit amet hendrerit justo consequat.
      </div>
    </div>
  );
};

export default BoardMember;

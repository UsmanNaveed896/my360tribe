import React from "react";
import Usercard from "../../components/userCard/usercard";
import Img1 from "../../assets/Rectangle 1400.png";
import Img2 from "../../assets/Group1000006267.png";
import Img3 from "../../assets/a.png";
import Img4 from "../../assets/b.png";
import Img5 from "../../assets/c.png";
import Img6 from "../../assets/d.png";
import Img7 from "../../assets/Group1000006281.png";
import Img8 from '../../assets/1.png'
import Img9 from '../../assets/2.png'
import Img10 from '../../assets/3.png'
import Img11 from '../../assets/4.jpg'
import Img12 from '../../assets/7.png'
import Img13 from '../../assets/6.png'





const Homepagesec6 = () => {
  const gradient =
    "linear-gradient(90deg, rgba(20,18,52,1) 0%, rgba(16,30,77,1) 0%, rgba(61,67,91,1) 100%)";
  const employees = [
    {
      img: Img8,
      name: "Greg 'Vinny' Vincent ",
      designation: " Navy SEAL",
   
    },
    {
      img: Img12,
      name: "Pat O'Rourke",
      designation: "Air Force (720 STG, PJ)",

    },
    {
      img: Img9,
      name: "Brian Hughes",
      designation: "Army (160 SOAR)",
     
    },
    {
      img: Img11,
      name: "Joe Hudak",
      designation: "Army (SF)",
    },
    // {
    //   img: Img10,
    //   name: "Jason Agopsowicz",
    //   designation: "Navy (SEAL)",
    // },
    {
      img:Img13,
      name: "Matt Bruni",
      designation: "Army (Ranger)",
    },
  ];

  const advisors = [
    {
      img: Img5,
      name: "Brage Garofalo",
      designation: "Co-Founder",
      experience:
        "10 Years of SOF Support, Cancer Researcher, Dog Lover, Cage Diver",
      description:
        "Brage's career, as a civilian, reflects a legacy of strategic leadership and a commitment to innovation. As a 25+ year Navy SEAL and senior Special Operations Officer, Brian led hundreds of critical operations, organizations, and US strategies across challenging environments, demonstrating unparalleled leadership, strategic fluency, and tactical acumen. His military service, highlighted by leadership in multiple combat deployments, showcases his ability to navigate complex situations with precision and integrity. Transitioning into the corporate world, Brian has continued to make significant impacts as the Chief Strategy Officer at an advanced technology company where his expertise in leading-edge computing and AI/ML has propelled the company into a new era of tech innovation. His journey from the rigorous demands of Special Operations to the dynamic challenges of the tech industry exemplifies a dedication to excellence and a continuous pursuit of impactful solutions to improve humankind. Motivated by pivotal disappointing corporate encounters and value gaps in transition, which ignited his determination to empower SOF veterans, ensuring their incredibly rare skills and elite leadership are recognized, valued, never underestimated.",
    },

    {
      "img": Img3,
      "name": "Michael Hudson",
      "designation": "Co-Founder",
      "experience": "10 Years of SOF Support, Banker, Galfer, and Traveller",
      "description": "Mike is a Pittsburgh native, who grew up in Clearwater, Florida, and has lived in Roswell, GA for the past 25 years. He is currently the Chief Administrative Officer for Consumer Operations at Wells Fargo. With over 30 years in banking, Mike has held executive-level positions in credit, operations, and innovation since 2007. Mike’s passion for the Special Operations community started in August 2011 after both a significant personal tragedy and Extortion 17. For the past 12 years, he has mentored over 75 individuals, co-founded the PNC Community Mutt Strut (an event to raise money to pair Veterans with Service Dogs), and has sat on the advisory board for several organizations, including Guardian Angels and SEAL Future Foundation. Mike is married to his wife Nicole of 24 years. They have a daughter, Delaney (20), who plays Division 1 Lacrosse, and a high school senior, Luke (18). Mike is an avid golfer, playing almost 100 rounds a year, and he travels extensively with his family and for work."
  },
    {
      img: Img4,
      name: "Chris Philips",
      designation: "Board Member (Millitary)",
      experience: "Marine Corps Veteran, Award Winner, PhD Candidate",
      description:
        "Chris Phillips is a highly recognized and committed Marine Corps veteran and advocate for other veterans. During her time at PNC, she stood up the military recruiting program at PNC Bank, created a sustainable model in the Military Advisory Council, helped establish military employee groups across corporate industries and  was the Military Affairs Liaison for the enterprise when she retired in 2021.    As a volunteer leader, Chris is a strong advocate for the medical service dog industry, a huge supporter of the use of horses for therapy and believes these highly trained animals are a solution to end the suffering of our veterans nationwide.  Her work has raised in excess of 2 million dollars for service dogs for veterans in danger of suicide.  Chris was recently named to the Board of Directors for Gunny’s Ridge and has been invited to join the Board of Directors for Folds of Honor this fall.    Additionally, Chris has worked extensively with USA Hockey’s Warrior Program since 2018.            Chris has been nationally recognized by the US Chamber of Commerce for her work with transitioning veterans and is a two-time finalist for the Col. Endres Individual Excellence in Veteran Employment Award.  She is the recipient of the 2013 Secretary of Defense Patriot Award and was named the 2023 Pittsburgh Veteran of the Year by the Military Friendly Brand through public vote… the most prestigious award given to a veteran in the region.      This year, she will complete her doctorate studies in Rhetoric and Communication at Duquesne University where she is has been an Adjunct faculty member for the past three years.    Chris now works in Consumer Operations at Wells Fargo.  She lives in Davidson, NC has two dogs and cat, loves living on the lake most of all, loves being the mother of two beautiful grown daughters and ‘Chucka’ to her amazing granddaughters.",
    },
    {
      img: Img6,
      name: " Brian G. Cunningham",
      designation: "Board Member (Millitary)",
      experience: "Navy (SEAL) Veteran, AI Executive, Transformational Leader",
      description:
        "Brian’s career, both in the military and as a civilian, reflects a legacy of strategic leadership and a commitment to innovation. As a 25+ year Navy SEAL and senior Special Operations Officer, Brian led hundreds of critical operations, organizations, and US strategies across challenging environments, demonstrating unparalleled leadership, strategic fluency, and tactical acumen. His military service, highlighted by leadership in multiple combat deployments, showcases his ability to navigate complex situations with precision and integrity. Transitioning into the corporate world, Brian has continued to make significant impacts as the Chief Strategy Officer at an advanced technology company where his expertise in leading-edge computing and AI/ML has propelled the company into a new era of tech innovation. His journey from the rigorous demands of Special Operations to the dynamic challenges of the tech industry exemplifies a dedication to excellence and a continuous pursuit of impactful solutions to improve humankind. Motivated by pivotal disappointing corporate encounters and value gaps in transition, which ignited his determination to empower SOF veterans, ensuring their incredibly rare skills and elite leadership are recognized, valued, never underestimated.",
    },
    // {
    //   name: "Jack Davis",
    //   designation: "Navy (EOD)",
    // },
    // {
    //   name: "Jason Agopsowicz",
    //   designation: "Navy (SEAL)",
    // },
    // {
    //   name: "Matt Bruni",
    //   designation: "Army (Ranger)",
    // },
  ];
  return (
    <>
      <div
        className="bg-[#d1d8f5] pb-[58px] bg-contain "
        style={{ backgroundImage: `url(${Img2})` }}
      >
        <div className="flex justify-center px-4 md:px-0">
          <div className="container max-w-[1200px] mt-16">
            <div className="flex justify-center">
              <div>
                <h1 className="text-[#0a194e] text-center font-bold text-5xl">
                  Meet Our Team
                </h1>
                <p className="text-[#0a194e] md:text-[35px] text-[25px] mt-6">
                  Founders and Founding Board{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap md:gap-16 gap-8 md:mt-12 mt-6 ">
              {advisors.map((item) => (
                <Usercard
                  img={item.img}
                  name={item.name}
                  designation={item.designation}
                  description={item.description}
                  experience={item.experience}
                />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <div>
                <p className="text-[#0a194e] text-[35px] mt-6">
                  Advisory Board{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap md:gap-16 gap-8">
              {employees.map((item) => (
                <Usercard
                img={item.img}
                  name={item.name}
                  designation={item.designation}
                  experience={item.experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover pb-12 "
        style={{ backgroundImage: `url(${Img7})` }}
      >
        <div className="content ">
          <h1 className="text-center text-5xl font-bold pt-12 text-white">
            {" "}
            Our Partners
          </h1>
          <div className="pt-16 flex justify-center gap-8 px-6">
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
          </div>
          <div className="pt-12 flex justify-center gap-8 px-6">
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
            <div className="img">
              <img src={Img1} alt="blac" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepagesec6;

export default function Navbar() {
  return (
    <>
      <div className=" bg-sky-400">
        <div className="py-5 pl-50 font-sans text-white text-4xl ">
          SURUWAT.
        </div>
        <div className="text-center text-4xl font-bold p-3 italic underline underline-offset-1 flex justify-around">
          My First React Project of Tailwind
        </div>
      </div>
      <div className="text-left">
        This is my first project using React and tailwind css. I am very happy
        to learn with Anish Gyawali dai. Thanks for helping in every step of our
        life.
      </div>
      <div className="text-right">
        {
          "Today, we are here to show our first step of using css. I used 'text-center' alignment to start my heading from the center of my page. And, I used 'text-right'alignment to start my first ltter of second paragraph from right side."
        }
      </div>
    </>
  );
}

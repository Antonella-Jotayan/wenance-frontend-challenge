import { GithubIcon, LinkedinIcon } from "../../icons";

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-black p-2 md:p-6'>
      <p className='text-white font-OpenSans font-bold tracking-wider py-3 md:text-lg'>
        Antonella Jotayan
      </p>
      <div className='flex my-6 space-x-6'>
        <a href='https://github.com/Antonella-Jotayan' target='_blank'>
          <GithubIcon width={40} height={40} fill='white' />
        </a>
        <a href='https://www.linkedin.com/in/antonellajotayan/' target='_blank'>
          <LinkedinIcon width={40} height={40} fill='white' />
        </a>
      </div>
    </div>
  );
};

export { Footer };

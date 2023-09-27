export default function Footer() {
  return (
    <div className="tracking-wide font-extralight text-center bg-gray-900 text-slate-200 absolute w-full bottom-0">
      Copyright &copy;{" "}
      <a
        className="text-blue-600 border-b-2 border-blue-600"
        href="https://ajaykc.netlify.app/"
      >
        Ajay KC
      </a>
      . All Rights Reserved.
      <p>
        <a
          href="https://iconscout.com/icons/weather"
          className="text-underline font-size-sm"
          target="_blank"
          rel="noreferrer"
        >
          Free Ios Weather Icon
        </a>{" "}
        by{" "}
        <a
          href="https://iconscout.com/contributors/giulio-smedile"
          className="text-underline font-size-sm"
        >
          Giulio Smedile
        </a>{" "}
        on{" "}
        <a href="https://iconscout.com" className="text-underline font-size-sm">
          IconScout
        </a>
      </p>
    </div>
  );
}

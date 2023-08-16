const ComponentDetails = ({ font, date, website, websiteLink, textColor }) => {
  return (
    <div className={`font-${font}`}>
      <div
        className={`fixed text-[${textColor}] lg:text-[16px] text-sm p-2 px-4 flex gap-2 bottom-0 left-0`}
      >
        <p>Recreation of the navmenu on</p>
        <a
          href={websiteLink}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {website}
        </a>
        <p>Website</p>
      </div>

      <div className={`fixed text-[${textColor}] lg:text-[16px] text-sm p-2 flex gap-2 bottom-0 right-0 px-4 font-albraRegular`}>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ComponentDetails;

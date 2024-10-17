const styles = { 
    boxWidth: 'xl:max-w-[1280px]',

    heading2: " font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: " font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexCol: "flex flex-col  justify-center items-center",
    flexRow: "flex flex-row justify-center items-center",

    paddingX: "sm:px-[4.5rem] px-7",
    paddingX2: "sm:px-16 px-6",
    paddingY: "sm:py-3 py-2",
    padding: "sm:px-16 px-2 sm:py-12 py-5",
  
    marginX: "sm:mx-16 mx-6", 
    marginY: "sm:my-16 my-6",

    spaceBtw: `flex flex-row justify-between items-center sm:px-16 px-6 `,

    boldText: `font-bold text-x sm:text-xl `,
    boldText50: `font-extrabold text-2xl sm:text-3xl `,
    boldText100: `font-extrabold text-xl md:text-4xl `,
    boldText150: `font-extrabold text-3xl  md:text-6xl`,

    rounded: "rounded-xl",
    rounded50: "rounded-2xl",
    rounded100: "rounded-full",

    limeBg: "bg-[lime]",
    limeTx: "text-[lime]",
    blackBg: "bg-[#1e2029]",
    blackTx: "text-[#1e2029]",
    greyBg:"bg-[#e3e3e3]",
    greyTx:"text-[#e3e3e3]",
    whiteBg:"bg-[#FFFFFF]",
    whiteTx:"text-[#FFFFFF]",

    btnPadding:"sm:p-1 sm:px-3 p-2  rounded-full ",

    hidden: " flex sm:hidden",
    hidden2: " sm:flex hidden",
    
    heroPaddingY: ' py-[4rem] sm:py-[10rem] ',
}

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
type SectionHeading = {
    title: string,
    subTitle?: string,
}
const SectionHeading = ({title, subTitle}: SectionHeading) => {
    return (
        <div className={`md:max-w-3xl lg:max-w-2xl mx-auto mb-12`} >
            <h1 className="text-black font-bold text-4xl md:text-5xl text-center">{title}</h1>
            <h2 className="text-lg font-normal text-primary mt-2 text-center">{subTitle}</h2>
        </div>
    )
}

export default SectionHeading

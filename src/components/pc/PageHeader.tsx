import LazyImage from "../LazyImage"

const PageHeader = () => {
  return (
    <div className=" max-w-[1620px] mx-auto pt-[36px]">
      <LazyImage src="/logo.png" className="w-[32px] h-[32px]" />
    </div>
  )
}

export default PageHeader
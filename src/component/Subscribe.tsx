import Form from '../component/ui/Form'


const Subscribe = () => {
  return (
    <div id='subscribe'>
        <div className="flex flex-col justify-center text-[#171b5a] items-center py-6">
          <h1 className="font-semibold text-5xl ">
            Stay In Touch
          </h1>
          <p className="w-3/4 text-center pt-6 pb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-32 h-1 bg-purple-700"></div>
        </div>
        <div className="w-full grid place-items-center">
            <div className="w-5/6 grid place-items-center">
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
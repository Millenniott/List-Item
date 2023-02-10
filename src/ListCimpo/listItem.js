export default function App() {
  return (
    <div className="item grid md:flex min-h-32 bg-green-500 relative">
      <div className="absolute top-0 right-0 md:static md:top-auto mdright-auto  h-[48px] w-[48px] items-center justify-center flex bg-purple-500 min-w-[20px] md:max-w-[48px] md:h-[48px]">
        CB
      </div>
      <div className="flex items-center justify-center grow bg-green-500 min-w-[20px] md:max-w-[48px] md:h-[48px]">
        B
      </div>
      <div className="flex truncate items-center justify-start grow bg-blue-500 text-lg font-thin px-2 py-1 ">
        <span className="mr-12 md:mr-auto truncate">
          Benjamin Oliver Nathaniel Mizrany
        </span>
      </div>
      <div className="flex items-center justify-start grow bg-red-500 text-base font-thin px-2 py-1">
        United Kingdom
      </div>
      <div className="flex items-center justify-start grow bg-yellow-500">
        3
      </div>
      <div className="flex items-center justify-start grow bg-orange-500">
        In
      </div>
    </div>
  );
}

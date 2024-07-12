function Card({name="NoOne", desc="Nothing much to tell.", image="https://images.pexels.com/photos/26890891/pexels-photo-26890891/free-photo-of-woman-hand-putting-blueberries-on-sweet-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}) {
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {desc}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;

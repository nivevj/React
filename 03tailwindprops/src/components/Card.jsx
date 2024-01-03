import React from 'react'

function Card({username = "x", job = "Student", array}) { //default value is defined in case user doesn't pass value

  return (
    <div>
        {/* <img src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1' alt='cat'></img>
        <h1 classNameName='text-2xl bg-green-500 p-3 rounded'>A card of photos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iusto.</p>
        <hr></hr> */}

        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto reiciendis consequuntur ducimus, error cupiditate aliquam beatae obcaecati a vitae? Vero distinctio, ratione rem quo natus dolor ut in non!
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div>
                {job}{" | "}{array}
            </div>
            </figcaption>
        </div>
        </figure>

        <hr></hr>

    </div>
  )
}

export default Card
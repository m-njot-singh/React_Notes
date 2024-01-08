import { func } from "prop-types";
import React from "react";

function Card({Name="Manjot" , Location="Punjab,India"}){
    return(
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1703868673582-becc3bd199d8?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
            <div class="pt-6 space-y-4">
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    {Name}
                </div>
                <div class="text-sla">
                    {Location}
                </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card
import React from 'react'
import { InwonersAantallen } from "@/components/infographics/InwonersChart";
import { Inkomensverschillen } from "@/components/infographics/InkomensChart";
import { EenpersoonsHuishoudens } from "@/components/infographics/EenpersoonshuishoudensChart";

const AllCharts = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">

      <div className="flex flex-col justify-between">
        <div>
          <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
            <span className="font-semibold">Inwonersaantallen 2014 - 2024</span>
          </div>

          <div className="text-md mt-4 px-4">
            De afgelopen 10 jaar is het inwonersaantal in de Staatsliedenbuurt
            met 250 gestegen.
            
          </div>
        </div>
        <InwonersAantallen />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
            <span className="font-semibold">Gemiddeld besteedbaar inkomen</span>
          </div>
          <div className="text-md mt-4 flex justify-start px-4">
            Het gemiddelde besteedbare inkomen is de afgelopen 20 jaar bijna
            verdubbeld.
            <br />
            Een significante stijging van maar liefst 99%.
          </div>
        </div>
            <Inkomensverschillen />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
            <span className="font-semibold">Eenpersoonshuishoudens</span>
          </div>
          <div className="text-md mt-4 flex justify-start px-4">
            De toe en afname van het aantal eenpersoonshuishoudens.
            <br />
            Aantallen zijn weergegeven in procenten van het totaal aantal
            huishoudens.
          </div>
        </div>
         <EenpersoonsHuishoudens />
      </div>

    </div>
  );
}

export default AllCharts

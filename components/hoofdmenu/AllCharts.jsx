import React from 'react'
import { InwonersAantallen } from "@/components/hoofdmenu/infographics/InwonersChart";
import { Inkomensverschillen } from "@/components/hoofdmenu/infographics/InkomensChart";
import { EenpersoonsHuishoudens } from "@/components/hoofdmenu/infographics/EenpersoonshuishoudensChart";
import { Leeftijdscategorieen } from "@/components/hoofdmenu/infographics/LeeftijdscategorieenChart";
import { GemiddeldeHuurPrijs } from "@/components/hoofdmenu/infographics/GemiddeldeHuurPrijsChart";

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
          <div className="text-md mt-4 px-4">
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
          <div className="text-md mt-4 px-4">
            De toe en afname van het aantal eenpersoonshuishoudens.
            <br />
            Aantallen zijn weergegeven in procenten van het totaal aantal
            huishoudens.
          </div>
        </div>
        <EenpersoonsHuishoudens />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
            <span className="font-semibold">Leeftijdscategorieën</span>
          </div>
          <div className="text-md mt-4 px-4">
            Leeftijdscategorieën ingedeeld van 0-18 jaar, 18-64 jaar, 65-79 jaar
            en 80 jaar en ouder. Weergegeven in absolute aantallen op de totale
            bevolking van de wijk.
          </div>
        </div>
        <Leeftijdscategorieen />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
            <span className="font-semibold">Gemiddelde huurprijs</span>
          </div>
          <div className="text-md mt-4 px-4">
            De gemiddelde huurprijs van een woning in de Staatsliedenbuurt<br />
            De gemiddelde huurprijs is de afgelopen 10 jaar met gemiddeld €350 gestegen.
          </div>
        </div>
        <GemiddeldeHuurPrijs />
      </div>
    </div>
  );
}

export default AllCharts

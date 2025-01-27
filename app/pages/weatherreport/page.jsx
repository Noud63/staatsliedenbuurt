"use client";
import { useState, useEffect } from "react";
import getWeatherData from "@/utils/getWeatherData";
import getSunriseAndSunset from "@/utils/getSunriseAndSunset";
import WeerVandaag from "@/components/WeerVandaag";
import WeerMorgen from "@/components/WeerMorgen";

const WeatherreportPage = () => {
  const [d, setD] = useState({});
  const [d2, setD2] = useState({});
  const [sunMoon, setSunMoon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, data2 } = await getWeatherData();
        setD(data);
        setD2(data2);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const {results} = await getSunriseAndSunset();
      setSunMoon(results);
    };
    getData();
  }, []);

  // const now = d.date.slice(0, 10);
  const today = new Date().toLocaleDateString();

  //Tomorrow
  let date = new Date();
  date.setDate(date.getDate(date) + 1);

  return (
    <div className="mx-auto mt-8 w-full text-white md:max-w-[650px]">
      <div className="mx-4 bg-[url('../public/images/cloud2.png')] bg-cover bg-center bg-no-repeat max-md:mx-6 max-sm:mx-4 max-xsm:mx-2">
        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2 text-xl font-semibold text-yellow-900 max-xsm:text-xl">
          <span>Het weer actueel:</span>
          <span className="flex items-end pt-2 text-base font-normal">
            {today}
          </span>
        </div>

        <WeerVandaag data1={d} sunMoon={sunMoon} />
      </div>

      <div className="mx-4 mt-8 bg-[url('../public/images/cloud.png')] bg-center bg-no-repeat max-xsm:mx-2">
        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2 text-xl font-semibold text-yellow-900 max-xsm:text-xl">
          <span>Het weer voor morgen:</span>
          <span className="flex items-end pt-2 text-base font-normal">
            {date.toLocaleDateString("nl-NL")}
          </span>
        </div>

        <WeerMorgen data2={d2} sunMoon={sunMoon} day={date} />
      </div>
      <div className="mt-8 flex justify-center text-xs">
        (Data provided by OpenWeathermap.org & SunriseSunset.io)
      </div>
    </div>
  );
};

export default WeatherreportPage;

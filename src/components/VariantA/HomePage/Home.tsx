import React, { useState } from 'react';
import { Image, Loader } from '@mantine/core';
import Main from '../Layouts/Main';

export default function HomeVariantA(props : any) {
  const [data, setData] = useState<any>(2);
 
  return (
    <div>
      <Main>
        <section className="flex justify-center">
          {data === 0 ? (
            <div className="mt-20 flex justify-center items-center h-full w-full">
              <Loader size="lg" />
            </div>
          ) : (
            <div className="overflow-auto">
              <div className="mt-10 rounded-b-lg w-[800px] ">
                <div className="flex">
                  <div className=" text-center w-full">
                    <p className="font-bold text-lg  bg-[#202E61] p-3 border rounded-t-lg text-white">
                      Projects
                    </p>
                    <div className="p-4 border ">
                      <p className="font-bold text-lg underline">{data.total_projects} project</p>
                      <p>{data.device_group} device groups</p>
                      <p>{data.vendors} vendors</p>
                    </div>
                  </div>
                  <div className=" text-center  w-full">
                    <p className="font-bold text-lg  bg-[#202E61] p-3 border rounded-t-lg text-white">
                      Devices
                    </p>
                    <div className="p-4 border">
                      <p className="font-bold text-lg underline">{data.devices} Devices</p>
                      <p>{data.vendors_online} Online</p>
                      <p>{data.vendors_offline} Offline</p>
                    </div>
                  </div>
                  <div className=" text-center  w-full">
                    <p className="font-bold text-lg  bg-[#202E61] p-3  border rounded-t-lg text-white">
                      Device to ODRE-E Hours
                    </p>
                    <div className="p-4 border">
                      <p className="font-bold text-lg underline">
                        {data.odree_hours_one_day} in last 24 Hours
                      </p>
                      <p>{data.odree_hours_seven_day} in last 7 days</p>
                      <p>{data.odree_hours_month} in last 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image
                    alt="logo"
                    // height={100}
                    // width={100}
                    src="/variantA/assets/images/simple-charts.jpg"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      </Main>
    </div>
  );
}

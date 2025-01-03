"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Quote from "@/components/quote";
import { getPrograms } from "@/api/program";
import { ProgramData } from "@/api/program";

const Dashboard = () => {
  const [programs, setPrograms] = useState<ProgramData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const data = await getPrograms();
        setPrograms(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <>
      <Banner />
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-2">
          <div className="bg-white shadow-lg rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold">
              Welcome to Helper Students Support, select your department to get
              started.
            </h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-6">
            <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {loading && <p>Loading programs...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
              {!loading &&
                !error &&
                programs.map((program) => (
                  <Card
                    key={program._id}
                    name={program.name}
                    description={program.description}
                  />
                ))}
            </div>
            <div className="lg:w-[30%]">
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import Repo from "@/components/Repo";
import RepoDir from "@/components/RepoDir";
import Link from "next/link";
import React, { Suspense } from "react";

function RepoDetailsPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
}

export default RepoDetailsPage;

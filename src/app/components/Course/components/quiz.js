import React from "react";
import Image from "next/image";
import Link from "next/link";


const Quiz = () => {
return (
    <main>
      <div className='container'>
        <h1>Quiz App</h1>
        <Link href='/Quiz'>
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}

export default Quiz;
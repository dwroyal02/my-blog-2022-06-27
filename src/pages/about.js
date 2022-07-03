import { Link } from 'gatsby';
import * as React from "react"

// styles

// markup
const about= () => {
  return (
    <main>
      <title>어바웃</title> 
      <div style={{display:"flex", gap: 10}}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">테스트-스페이스</Link>
      </div>
      <h1>어바웃</h1>
    </main>
  )
}

export default about;
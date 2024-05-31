import Link from "next/link";

export default async function Mypost() {
  const res = await fetch("http://127.0.0.1:8000/api/Post_list/",
    { cache: 'force-cache' }
  )
  const post = await res.json()

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 ml-20 max-sm:ml-0">
          <h1 className="text-center my-4">Our Posts</h1>
          <div className="d-flex flex-wrap">
            {post.map((item: any) => (
              <div
                key={item.id}
                className="card mb-3  mx-2  m-10 p-5"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-body p-2">
                  <h5 className="card-title bg-black text-white rounded-5">
                    {item.title}
                  </h5>
                  <p className="card-text line-clamp-1">{item.desc}</p>
                  <p className="card-text text-blue-600">
                    <span className=" text-blue-600">{item.date}</span>
                  </p>
                </div>
                <Link className="btn btn-outline-dark m-2"
                  href={`post/${item.id}`}>More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

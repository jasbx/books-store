import AddComment from "../comment/AddComment";

export default async function MyIdpost({
    params,


}: { params: { id: String } }
) {
    const res = await fetch(`http://127.0.0.1:8000/api/Post_list_pk/${params.id}`)
    const item = await res.json()

    return (
        <div>
        <div className="container">
            <div className="w-full">
                <h3 className="font-bold text-slate-800 italic text-center">Hello in post page</h3>
                <div className="col-lg-8 mx-auto">
                    <div className="d-flex flex-wrap justify-content-center">
                        {item && (
                            <div className="card mb-3 mx-2 my-10 p-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-body p-2">
                                    <h5 className="card-title bg-black text-white rounded-5">{item.title}</h5>
                                    <p className="card-text line-clamp-1">{item.desc}</p>
                                    <p className="card-text text-blue-600">
                                        <span className="text-blue-600">{item.date}</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
        <AddComment/>
</div>
       
    );
}
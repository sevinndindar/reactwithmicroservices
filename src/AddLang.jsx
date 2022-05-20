import React from "react";
export function AddLang(props)
{

    const {ekleneceklng,setEklenecek}=useState{(id:0,code:'', name:'')};
    const postData=()=>{
        props.postData(ekleneceklng);
    }

    return (

        <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                {this.state.languages.map((lng) => {
                  return (
                    <div key={lng.id}>
                      {lng.id} | {lng.code} | {lng.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  id:<input className="form-control" name="id" onChange={this.setEklenecek} type="text" value={this.state.ekleneceklng.id}/>
                </div>
                <div className="form-group">
                  code:<input className="form-control" name="code" onChange={this.setEklenecek} type="text" value={this.state.ekleneceklng.code}/>
                </div>
                <div className="form-group">
                  name:<input className="form-control" name="name" onChange={this.setEklenecek} type="text" value={this.state.ekleneceklng.name}/>
                </div>
                <button onClick={this.refreshData}>Yenile</button>
                <button onClick={this.postData}>Kaydet</button>
              </div>
            </div>
          </div>
      );
}
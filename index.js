exports.csvtexttools = function(csvtext, outputFormat='json') {
    let records = [];
    let arrays = [];
    const data = csvtext.split('\n');
    let headers = []
    if(data.length > 0){
        headers = data[0].split(',');
        const end = data[0].split(',').length;
        const dataList = csvtext.split(',');

        let cols = [];
        let temp = '';
        let skip = true;

        for(let i=0; i < dataList.length; i++){
        
            if(dataList[i].startsWith('"') && dataList[i].endsWith('"')) {
                cols.push(dataList[i]);
                temp = '';
                skip = true;
            }
            else if(dataList[i].startsWith('"')){
                temp += dataList[i]
                skip = false;
            }
            else if(dataList[i].endsWith('"')) {
                temp += dataList[i]
                cols.push(temp);
                temp = '';
                skip = true;
            }else if(skip) {
                cols.push(dataList[i]);
            }else{
                temp += dataList[i]
                skip = false;
            }
    
            if(cols.length === end){
                let split = cols[cols.length - 1].split('\n');
                let r = {};
                headers.map((o,idx) => {
                  if(idx===cols.length-1){
                    r = {...r, [o]:split[0] }
                  }else{
                    r = {...r, [o]:cols[idx]}
                  }                 
                })
                if(i >= end)
                records.push(r);
                cols = [split[1]];
            }
        }
    }
    
    if(outputFormat === 'sql'){
        console.log(records)
        let sql = '';
        for(let i = 0; i < records.length; i++){
            let table = '';
            let values = '';
            console.log(JSON.stringify(records[i]))
           Object.keys(records[i]).forEach(obj=> {
                 table += `${obj},`;
                 values += `'${records[i][obj]}',`;
           })
           sql += `INSERT INTO ${table.slice(0,-1)} VALUES (${values.slice(0,-1)});`;
        }
        return sql
    }else if(outputFormat === 'json'){
        return JSON.stringify(records)
    }else if(outputFormat === 'objects'){
        return records
    }

    return csvtext;
}
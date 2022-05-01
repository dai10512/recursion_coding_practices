
class Files{
    constructor(fileName,fileExtension,content,parentFolder){
        this.fileName = fileName
        if(fileExtension != ('.word'|| '.png' ||'.mp4' || '.pdf')){
            fileExtension = '.txt'
        }
        this.fileExtension = fileExtension
        this.content = content
        this.parentFolder = parentFolder
    }
    
    getLifetimeBandwidthSize(){
        let bandWidthSizeMB = this.content.length * 25
        let result = ''
        if(bandWidthSizeMB >= 1000){
            let bandWidthSizeGB = bandWidthSizeMB /1000
            result = bandWidthSizeGB + 'GB'
        }
        else{
            result = bandWidthSizeMB + 'MB' 
        }
        return result
    }

    prependContent(data){
        this.content = data + this.content
        return this.content
    }

    addContent(data,position){
        let leftWord = ''
        let rightWord = ''
        if(this.content[position] == ' '){
            leftWord = this.content.substring(0,position+1)
            rightWord =  this.content.substring(position,this.content.length) 
        }
        else{
            leftWord = this.content.substring(0,position)
            rightWord =  this.content.substring(position,this.content.length) 
        }

        if(data[data.length-1] == ' '){
            data = data.substring(0,data.length-1)
        }
        return leftWord + data + rightWord
    }

    showFileLocation(){
        return this.parentFolder + ' > ' + this.fileName + this.fileExtension
    }
}

assignment = new Files("assignment", ".word", "ABCDEFGH", "homework")
console.log(assignment.getLifetimeBandwidthSize())
console.log(assignment.prependContent("MMM"))
console.log(assignment.addContent("hello world", 5))
console.log(assignment.showFileLocation())


blade = new Files("blade", ".php", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view")
console.log(blade.getLifetimeBandwidthSize())
console.log(blade.addContent("font-weight-bold ", 10))
console.log(blade.showFileLocation())


// Filesクラス
// medium
// あなたは開発チームに所属しており、企業用向けのクラウドシステムを構築するタスクを与えられました。このソフトウェアの一部には、ユーザーがファイルを保存したり、読み書きできる機能が含まれています。ファイルを共有することもできるので、ユーザーは上書きがないように自分のファイルをロックする機能もついています。以下に従って、Files クラスを作成し、テストケースを出力してください。

// String fileName	ファイル名
// String fileExtension	ファイルの拡張子。.word、.png、.mp4、.pdf でない場合は、.txt に設定されます。
// String content	ファイルに含まれるコンテンツ
// String parentFolder	ファイルが置かれているフォルダの名前
// String getLifetimeBandwidthSize()	サービス中に使われるファイルの最大容量を返します。content に含まれる文字（空白文字も含む）につき、25MB として計算してください。例えば、40 文字含まれている場合、40 * 25MB = 1,000MB = 1GBになります。単位の最大はG（ギガ）とします。1000MB　以上は単位を GB に変換してください
// String prependContent(String data)	ファイルの content の先頭にデータ文字列を追加し、新しいcontentを返します。
// String addContent(String data, int position)	ファイルの content の指定した位置（インデックス）にデータ文字列を追加し、新しい content を返します。
// String showFileLocation()	親ファイル > ファイル名.拡張子という形で返します。
// テストケース

// assignment = new Files("assignment", ".word", "ABCDEFGH", "homework")

// assignment.getLifetimeBandwidthSize() --> 200MB

// assignment.prependContent("MMM") --> MMMABCDEFGH

// assignment.addContent("hello world", 5) --> MMMABhello worldCDEFGH

// assignment.showFileLocation() --> homework > assignment.word


// blade = new Files("blade", ".php", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view")

// blade.getLifetimeBandwidthSize() --> 1.475GB

// blade.addContent("font-weight-bold ", 10) --> bg-primary font-weight-bold text-white m-0 p-0 d-flex justify-content-center

// blade.showFileLocation() --> view > blade.txt
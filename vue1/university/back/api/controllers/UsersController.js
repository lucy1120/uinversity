
module.exports = {
    getData: function (req, res) {
        Promise.all([//并行无关联
            new Promise(async (resolve, reject) => {
                const adv = await Adv.find().sort('id desc');
                resolve(adv)
            }),
            new Promise(async (resolve, reject) => {
                const handline = await News.find({ newType: 'headlines' }).sort('id asc').limit(4);
                resolve(handline)
            }),
            new Promise(async (resolve, reject) => {
                const comprehensive = await News.find({ newType: 'comprehensive' }).sort('id asc').limit(4);
                resolve(comprehensive)
            }),
            new Promise(async (resolve, reject) => {
                const learning = await News.find({ newType: 'learning' }).sort('id asc').limit(8);
                resolve(learning)
            }),
            new Promise(async (resolve, reject) => {
                const story = await News.find({ newType: 'story' }).sort('id asc').limit(8);
                resolve(story)
            }),
            new Promise(async (resolve, reject) => {
                const notice = await Notice.find().sort('id asc').limit(8);
                resolve(notice)
            }),
        ]).then(arr => {
            res.json(arr)
        }).catch(err => {
            console.log(err);
        })
    },
    getDetail: async function (req, res) {
        const tableName = req.query.tableName;
        const id = req.query.id;
        const obj = await eval(tableName).findOne({ id });
        res.json(obj)
    },
    getCarousel: async function (req, res) {
        const arr = await Adv.find().sort('id desc');
        res.json(arr)
    },
    getMsgObj: async function (req, res) {
        Promise.all([
            new Promise(async (resolve, reject) => {
                const newest = await News.find({ newType: 'newest' }).sort('id asc').limit(5);
                resolve(newest)
            }),
            new Promise(async (resolve, reject) => {
                const newhot = await News.find({ newType: 'newhot' }).sort('id asc').limit(5);
                resolve(newhot)
            }),
            new Promise(async (resolve, reject) => {
                const images = await Images.find().sort("id asc").limit(4);
                resolve(images)
            }),
            new Promise(async (resolve, reject) => {
                const video = await Video.find().sort("id asc").limit(4);
                resolve(video)
            }),
        ]).then(arr => {
            res.json(arr)
        }).catch(err => {
            console.log(err);
        })
    },
    getNews: async function (req, res) {
        const newType = req.query.type;
        const arr = await News.find({ newType }).sort('id asc').limit(5);
        res.json(arr)
    },
    getMedia: async function (req, res) {
        const table = req.query.type;
        const size = req.query.size;
        if (/^new/.test(table)) {
            const arr = await News.find({ newType: table }).sort("id asc").limit(size);
            return res.json(arr)
        }
        const arr = await eval(table).find().sort("id asc").limit(size);
        res.json(arr)
    },
    getListTotal: async function (req, res) {
        const newType = req.query.type;
        const clsType = req.query.clsType;
        if (clsType === 'news') {
            const number = await News.count({ newType });
            return res.json(number)
        }
        const number = await eval(clsType).count();
        res.json(number)
    },
    getListMsg: async function (req, res) {
        const newType = req.query.type;
        const start = req.query.start;
        const clsType = req.query.clsType;
        if (clsType === 'news') {
            const arr = await News.find({ newType }).sort('id asc').skip(start).limit(10);
            return res.json(arr)
        }
        const arr = await eval(clsType).find().sort('id asc').skip(start).limit(10);;
        res.json(arr)
    },
    getSearchTotal: async function (req, res) {
        const newType = req.query.type;
        const tableName = req.query.tableName;
        const keyword = req.query.keyword;
        if (tableName === 'News') {
            const number = await News.count({ newType, title: { contains: keyword } });
            return res.json(number)
        }
        const number = await eval(tableName).count({ title: { contains: keyword } });
        res.json(number)
    },
    getSearchMsg: async function (req, res) {
        const newType = req.query.type;
        const start = req.query.start;
        const tableName = req.query.tableName;
        const keyword = req.query.keyword;
        if (tableName === 'News') {
            const arr = await News.find({ newType, title: { contains: keyword } }).skip(start).limit(5);
            return res.json(arr)
        }
        const arr = await eval(tableName).find({ title: { contains: keyword } }).skip(start).limit(5);;
        res.json(arr)
    },
    getSearchNews: async function (req, res) {
        const keyword = req.query.keyword;
        const arr = await News.find({ title: { contains: keyword } });
        return res.json(arr)
    },
    getSearchTotal1: async function (req, res) {
        const sortName = req.query.sortName;
        const keyword = req.query.keyword;
        let tableName = ''
        switch (sortName) {
            case "notice":
                tableName = 'Notice';
                break;
            case "image":
                tableName = 'Images';
                break;
            case "video":
                tableName = 'Video';
                break;
            default:
                tableName = 'News';
        }
        if (tableName === 'News') {
            const num = await News.count({ newType: sortName, title: { contains: keyword } });
            return res.json(num)
        }
        const num = await eval(tableName).count({ title: { contains: keyword } });
        res.json(num)
    },
    getSearchMsg1: async function (req, res) {
        const sortName = req.query.sortName;
        const keyword = req.query.keyword;
        const start = req.query.start;
        let tableName = ''
        switch (sortName) {
            case "notice":
                tableName = 'Notice';
                break;
            case "image":
                tableName = 'Images';
                break;
            case "video":
                tableName = 'Video';
                break;
            default:
                tableName = 'News';
        }
        if (tableName === 'News') {
            const arr = await News.find({ newType: sortName, title: { contains: keyword } }).sort('id asc').skip(start).limit(5);
            return res.json(arr)
        }
        const arr = await eval(tableName).find({ title: { contains: keyword } }).sort('id asc').skip(start).limit(5);;
        res.json(arr)
    },
    userVisit: async function (req, res) {
        const obj = await Timer.findOne({ id: 1 });
        const arr = await Timer.update({ id: 1 }, { count: obj.count + 1 }).fetch()
        res.json(arr[0].count)
    }
};
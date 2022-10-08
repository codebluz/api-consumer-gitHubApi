class RepositoryFilters {
    static handleData(data) {
        data = this.filterLanguage(data);
        data = this.sortItems(data);
        data = this.sliceItems(data);
        data = this.filterFields(data);
        return data;
    }
    static filterLanguage(data) {
        const language = item => item.language === 'C#';
        data = data.filter(language);
        return data;
    }
    static sortItems(data) {
        return data.sort((a,b) => b.created_at - a.created_at);
    }
    static sliceItems(data) {
        return data.slice(0,5);
    }
    static filterFields(data) {
        const newData = [];
        data.forEach(item => newData.push({name: item.name, description: item.description, language: item.language, created_at: item.created_at}));
        return newData;
    }
}

export default RepositoryFilters;
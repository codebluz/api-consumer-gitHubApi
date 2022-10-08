import axios from 'axios';
import RepositoryFilters from '../functions/filters.js'

class RepositoryController {
    static requestData = (req, res) => {
        axios.get('https://api.github.com/orgs/takenet/repos')
        .then(result => res.send(RepositoryFilters.handleData(result.data)))
        .catch((e) => {
            console.log(`Error - ${e}`)
            res.status(500).send('Request error');
        })
    }
}

export default RepositoryController;
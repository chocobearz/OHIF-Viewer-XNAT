const sessionMap = {
  /**
   * Returns the metadata for a scan, or just one property, if specified.
   *
   * @param {string} seriesInstanceUid  The seriesInstanceUid of the scan.
   * @param {string} [property] A particular property to return.
   *
   * @returns {Object||string} An object if no property is specified, or the
   *                           value of the specified property.
   */
  getScan: (seriesInstanceUid, property) => {
    if (!seriesInstanceUid) {
      return _map.scans;
    }

    const scan = _map.scans.find(
      scanI => scanI.seriesInstanceUid === seriesInstanceUid
    );

    if (!property) {
      return scan;
    }

    return scan[property];
  },

  /**
   * Extracts all of the scans contained in the JSON manifest in the sessionMap,
   * and stores them as scan entries with seriesInstanceUid, seriesDescription,
   * seriesNumber, and additional supplied metadata.
   *
   * @param {Object} json A JSON manifest to parse.
   * @param {Object} metadata Metadata to add to the scans entries.
   *
   * @returns {null}
   */
  setScan: (json, metadata) => {
    console.log(json);

    const studies = json.studies;

    for (let i = 0; i < studies.length; i++) {
      const seriesList = studies[i].seriesList;

      for (let j = 0; j < seriesList.length; j++) {
        console.log(`series [${i}, ${j}]`);

        _map.scans.push({
          seriesInstanceUid: seriesList[j].seriesInstanceUid,
          seriesDescription: seriesList[j].seriesDescription,
          seriesNumber: seriesList[j].seriesNumber,
          ...metadata
        });
      }
    }
  },

  /**
   * Adds metadata to the sessions metadata array.
   *
   * @param {Object} metadata Metadata to add to the session entries.
   *
   * @returns {null}
   */
  setSession: metadata => {
    _map.sessions.push(metadata);
  },

  /**
   * Returns the metadata for a session, or just one property, if specified.
   *
   * @param {string} experimentId The experimentId of the session.
   * @param {string} [property] A particular property to return.
   *
   * @returns {Object||string} An object if no property is specified, or the
   *                           value of the specified property.
   */
  getSession: (experimentId, property) => {
    if (!experimentId) {
      return _map.sessions;
    }

    const session = _map.sessions.find(
      sessionI => sessionI.seriesInstanceUid === seriesInstanceUid
    );

    if (!property) {
      return session;
    }

    return session[property];
  },

  /**
   * Sets the subjectId of the view.
   *
   * @param {string} subjectId The subjectId of the view.
   *
   * @returns {null}
   */
  setSubject: subjectId => {
    _map.subject = subjectId;
  },

  /**
   * Returns the subjectId of the view.
   *
   * @returns {string}
   */
  getSubject: () => {
    return _map.subject;
  },

  /**
   * Sets the projectId of the view.
   *
   * @param {string} projectId The projectId of the view.
   *
   * @returns {null}
   */
  setProject: projectId => {
    _map.project = projectId;
  },

  /**
   * Returns the projectId of the view.
   *
   * @returns {string}
   */
  getProject: () => {
    return _map.project;
  },

  /**
   * Sets the parentProjectId of the view.
   *
   * @param {string} parentProjectId The parentProjectId of the view.
   *
   * @returns {null}
   */
  setParentProject: parentProjectId => {
    _map.parentProject = parentProjectId;
  },

  /**
   * Returns the parentProjectId of the view.
   *
   * @returns {string}
   */
  getParentProject: () => {
    return _map.parentProject;
  },

  /**
   * Sets the experimentId of the view.
   *
   * @param {string} experimentId The experimentId of the view.
   *
   * @returns {null}
   */
  setExperiment: experimentId => {
    _map.experiment = experimentId;
  },

  /**
   * Returns the experimentId of the view.
   *
   * @returns {string}
   */
  getExperiment: () => {
    return _map.experiment;
  }
};

_map = {
  scans: [],
  sessions: [],
  subject: "",
  project: "",
  parentProject: "",
  experiment: ""
};

export { sessionMap };

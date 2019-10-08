'use strict';

import { photos } from "../db/db";

/**
 * getPhotoById controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const getPhotoById = (req, res, next) => {
  try {
    res.status(200).send({
      data: [],
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};

/**
 * updatePhoto controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const updatePhoto = (req, res, next) => {
    try {
        let data = [];
        for (let i=0; i<photos.length; i++) {
            let is_exist = false;

            for (let j=0; j<photos[i]['photos'].length; j++) {
                if (req.params.id == photos[i]['photos'][j]['id']) {
                    photos[i]['photos'][j]['favorite'] += req.body.rating_value;
                    data = photos[i]['photos'][j];
                    is_exist = true;
                    break;
                }
            }

            if (is_exist == true) {
                break;
            }
        }

        console.log(data);
        
        res.status(200).send({
            data: data,
            status: 'success',
        });
    } catch (err) {
        res.status(404).send({
            message: err.message,
            status: 'failure',
        });
    }
};

'use strict';
import { albums, photos } from "../db/db"

/**
 * getAlbum controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const getAlbum = (req, res, next) => {
    try {
        console.log(123123123);
        res.status(200).send({
            data: albums,
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
 * getAlbumById controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const getAlbumById = (req, res, next) => {
    try {
        let data = [];
        for (let i=0; i<photos.length; i++) {
            if (photos[i]['albumId'] == req.params.id) {
                data = photos[i]['photos'];
            }
        }

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

const graphQl = async (api, params) => {
  try {
    await api.run(params);

    if (api.data.errors?.length) {
      throw new Error(`graphQlApi error: ${api.data.errors[0].message}`);
    }

    return {
      data: api.data,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error,
    };
  }
};

module.exports = { graphQl };



async function bfhlPostLogicController(req, res, next) {
  try {
    // Input validation
    if (!req.body.data || !Array.isArray(req.body.data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input format" });
    }

    const inputData = req.body.data;

    // Process the data
    const numbers = inputData.filter(item => !isNaN(item));
    const alphabets = inputData.filter(item => isNaN(item));

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => char.length === 1 && char.toLowerCase() === char);
    const highestLowercase = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort((a, b) => b.localeCompare(a))[0]] : [];

    // Prepare the response
    const response = {
      is_success: true,
      user_id: "aryaman_somvanshi_15032003", 
      email: "aryaman.somvanshi2021@vitstudent.ac.in", 
      roll_number: "21BCE0582",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercase
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ is_success: false, error: "Internal server error" });
  }
}

async function bfhlGetLogicController(req, res, next) { 
  try {
    const response = {
      operation_code: 1
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing GET request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  bfhlGetLogicController,
  bfhlPostLogicController
}